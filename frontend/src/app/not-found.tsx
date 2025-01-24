import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import Container from "@/components/container"

export default function NotFound() {
  return (
    <Container className="items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Whoops!</h1>
      <p>Looks like that doesn&apos;t exist</p>
      <Link href="/" className={buttonVariants()}>
        Return Home
      </Link>
    </Container>
  )
}
