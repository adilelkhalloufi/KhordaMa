import { Product } from '@/interfaces/admin'
import { webRoutes } from '@/routes/web'
import { Link } from 'react-router-dom'

export default function RelatedProduct(product : Product) {
  return (
    <div className="relative overflow-hidden rounded-lg group">
    <Link
      to={webRoutes.SingleProduit + product.id}
      className="absolute inset-0 z-10"
    >
      <span className="sr-only">View</span>
    </Link>
    <img
      src="/placeholder.svg"
      alt="Related Product 1"
      width={400}
      height={300}
      className="object-cover w-full h-60"
      style={{ aspectRatio: "400/300", objectFit: "cover" }}
    />
    <div className="p-4 bg-background">
      <h3 className="text-lg font-semibold md:text-xl">
        Acme Prism Tee
      </h3>
      <p className="text-sm text-muted-foreground">
        Cozy Chromatic Blend
      </p>
      <h4 className="text-base font-semibold md:text-lg">$99</h4>
    </div>
  </div>

  )
}
