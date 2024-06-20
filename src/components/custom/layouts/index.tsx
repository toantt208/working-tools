"use client"

import Container from "./Container";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
