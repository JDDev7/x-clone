"use client"
import React, { useEffect, useRef } from 'react'
import style from './create-post.module.css'
import { useFormStatus } from 'react-dom'

function CreatePostTextArea() {
    const {pending} = useFormStatus()
    const sentPost = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(()=> {
        if (textAreaRef.current === null) return

        if (!pending && sentPost.current) {
            sentPost.current = false
            textAreaRef.current.value = ''
            return
        }

        sentPost.current = pending

    }, [pending])
  return (
    <textarea
    ref={textAreaRef}
    name="content"
    rows={4}
    placeholder="¿Que dice creatura?"
    className={style.MessageArea}
  />
  )
}

export default CreatePostTextArea