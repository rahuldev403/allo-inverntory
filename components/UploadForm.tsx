"use client"

import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { FileUp, ImageIcon, X, Loader2 } from "lucide-react"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const ACCEPTED_PDF_TYPES = ["application/pdf"]
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

const formSchema = z.object({
  pdfFile: z
    .any()
    .refine(
      (file) => !!file && (typeof window === "undefined" || file instanceof File),
      "PDF file is required."
    )
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 50MB.")
    .refine(
      (file) => ACCEPTED_PDF_TYPES.includes(file?.type),
      "Only .pdf files are accepted."
    ),
  coverImage: z
    .any()
    .optional()
    .refine(
      (file) => !file || (typeof window === "undefined" || file instanceof File),
      "Cover image must be a file."
    )
    .refine(
      (file) => !file || (file.size <= MAX_FILE_SIZE),
      "Max image size is 50MB."
    )
    .refine(
      (file) =>
        !file || (ACCEPTED_IMAGE_TYPES.includes(file.type)),
      "Only .jpg, .png, .webp formats are supported."
    ),
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author Name is required"),
  voice: z.string().min(1, "Please select an assistant voice"),
})

export default function UploadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const pdfInputRef = useRef<HTMLInputElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      voice: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsSubmitting(false)
    console.log(values)
  }

  const voices = {
    male: [
      { id: "dave", name: "Dave", description: "Deep & Authoritative" },
      { id: "daniel", name: "Daniel", description: "Warm & Conversational" },
      { id: "chris", name: "Chris", description: "Energetic & Engaging" },
    ],
    female: [
      { id: "rachel", name: "Rachel", description: "Calm & Professional" },
      { id: "sarah", name: "Sarah", description: "Bright & Friendly" },
    ],
  }

  return (
    <div className="new-book-wrapper relative">
      {isSubmitting && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-[#663820]" />
            <p className="text-lg font-serif font-medium text-[#212a3b]">
              Synthesizing Book...
            </p>
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="pdfFile"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormControl>
                  <div>
                    <input
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      ref={pdfInputRef}
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) onChange(file)
                      }}
                    />
                    <div
                      role="button"
                      tabIndex={0}
                      className={cn(
                        "upload-dropzone border-2 border-dashed border-gray-300",
                        value && "upload-dropzone-uploaded"
                      )}
                      onClick={() => !value && pdfInputRef.current?.click()}
                    >
                      {value ? (
                        <div className="flex flex-col items-center gap-2">
                          <FileUp className="upload-dropzone-icon text-[#663820]" />
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#663820]">
                              {value.name}
                            </span>
                            <X
                              className="upload-dropzone-remove"
                              onClick={(e) => {
                                e.stopPropagation()
                                onChange(undefined)
                                if (pdfInputRef.current) pdfInputRef.current.value = ""
                              }}
                            />
                          </div>
                          <p className="upload-dropzone-hint">Click to change file</p>
                        </div>
                      ) : (
                        <>
                          <FileUp className="upload-dropzone-icon" />
                          <p className="upload-dropzone-text">Click to upload PDF</p>
                          <p className="upload-dropzone-hint">PDF file (max 50MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Title</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Rich Dad Poor Dad" className="form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Author Name</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Robert Kiyosaki" className="form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="form-label">Choose Assistant Voice</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col gap-6"
                  >
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Male Voices</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {voices.male.map((voice) => (
                          <FormItem key={voice.id}>
                            <FormControl>
                              <RadioGroupItem value={voice.id} className="sr-only" />
                            </FormControl>
                            <FormLabel
                              className={cn(
                                "voice-selector-option m-0 h-full",
                                field.value === voice.id
                                  ? "voice-selector-option-selected"
                                  : "voice-selector-option-default"
                              )}
                            >
                              <div className="text-center w-full">
                                <div className="font-semibold text-base">{voice.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">{voice.description}</div>
                              </div>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Female Voices</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {voices.female.map((voice) => (
                          <FormItem key={voice.id}>
                            <FormControl>
                              <RadioGroupItem value={voice.id} className="sr-only" />
                            </FormControl>
                            <FormLabel
                              className={cn(
                                "voice-selector-option m-0 h-full",
                                field.value === voice.id
                                  ? "voice-selector-option-selected"
                                  : "voice-selector-option-default"
                              )}
                            >
                              <div className="text-center w-full">
                                <div className="font-semibold text-base">{voice.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">{voice.description}</div>
                              </div>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImage"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormControl>
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={coverInputRef}
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) onChange(file)
                      }}
                    />
                    <div
                      role="button"
                      tabIndex={0}
                      className={cn(
                        "upload-dropzone border-2 border-dashed border-gray-300",
                        value && "upload-dropzone-uploaded"
                      )}
                      onClick={() => !value && coverInputRef.current?.click()}
                    >
                      {value ? (
                        <div className="flex flex-col items-center gap-2">
                          <ImageIcon className="upload-dropzone-icon text-[#663820]" />
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#663820]">
                              {value.name}
                            </span>
                            <X
                              className="upload-dropzone-remove"
                              onClick={(e) => {
                                e.stopPropagation()
                                onChange(undefined)
                                if (coverInputRef.current) coverInputRef.current.value = ""
                              }}
                            />
                          </div>
                          <p className="upload-dropzone-hint">Click to change file</p>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="upload-dropzone-icon" />
                          <p className="upload-dropzone-text">Click to upload cover image</p>
                          <p className="upload-dropzone-hint">Leave empty to auto-generate from PDF</p>
                        </>
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="form-btn w-full bg-[#663820] hover:bg-[#7a4528] text-white text-lg font-serif font-bold py-4 rounded-lg transition-colors border-0"
          >
            Begin Synthesis
          </button>
        </form>
      </Form>
    </div>
  )
}
