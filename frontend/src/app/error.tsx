"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import Container from "@/components/container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Something went wrong!</h1>
      <p>
        Don&apos;t worry, our team has been notified and we&apos;ll try to fix
        it as soon as possible.
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  )
}
