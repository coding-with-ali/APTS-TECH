// app/services/[slug]/types/service.ts
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface Service {
  _id?: string
  title: string
  description: string
  icon?: {
    asset?: {
      url?: string
    }
  }
}
