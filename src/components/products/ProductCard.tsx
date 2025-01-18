import { Card, CardContent, CardHeader } from "@/components/ui/card";
 interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
}
export const ProductCard = ({ product }: ProductCardProps) => {
   
  return (
    <Card className="product-card">
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-primary font-bold mb-2">${product.price}</p>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
      </CardContent>
    </Card>
  );
};