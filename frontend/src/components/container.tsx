import React from "react"

import { cn } from "@/lib/utils"

const Container: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={cn("container flex grow flex-col", className)} {...props} />
)

export default Container
