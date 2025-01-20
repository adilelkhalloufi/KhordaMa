import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/interfaces/models/admin";
import { IconHeart } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Badge } from "../ui/badge";
interface ProductCardProps {
  product: Product
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <Card className="product-card relative">
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />

     
        <div className="absolute top-2 right-2">
          <Badge color="success" className="text-xs">
            {product.statue}
          </Badge>
         </div>
                
        <div className="absolute top-2 left-2">
          <Badge className="px-2 py-1 bg-primary text-white rounded-lg text-xs">
            <IconHeart></IconHeart>
          </Badge>
        </div>

      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-primary font-bold mb-2">{product.price} {t('currency')}</p>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
      </CardContent>
    </Card>
  );
};