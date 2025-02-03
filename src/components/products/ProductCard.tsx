import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconHeart } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Badge } from "../ui/badge";
import { Product } from "@/interfaces/admin";
import i18next from "i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { webRoutes } from "@/routes/web";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/slices/cartSlice";
 
interface ProductCardProps {
  product: Product
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const addProductToCart = (product : Product) => {
     dispatch(addProduct(product));
  }

  return (
    <Card className="product-card relative"
    
    >
      <CardHeader className="p-0">
        <Link to={webRoutes.SingleProduit.replace(':id', product.id)}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />


            <div className="absolute top-2 right-2">
              <Badge
                variant={product.status.color}

                className="text-xs">
                {product.status.name[i18next.language]}
              </Badge>
            </div>

            <div className="absolute top-2 left-2">
              <Badge className="px-2 py-1 bg-primary text-white rounded-lg text-xs">
                <IconHeart></IconHeart>
              </Badge>
            </div>
        </Link>

      </CardHeader>
      <CardContent className="p-4">


        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-primary font-bold mb-2">{product.price} {t('currency')}</p>



        <div className="flex items-center gap-6">
          <div className="flex flex-col items-start">
            <span className="text-sm text-[#8C929E]">{t('product.unite')}</span>
            {product.unite.name[i18next.language]}

          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-[#8C929E]">{t('product.categorie')}</span>
            {product.categorie.name[i18next.language]}

          </div>
       
        </div>



        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>

        {/* Create button to command  */}
        <button className="bg-primary text-white py-2 px-4 mt-4 rounded-3xl w-full"
          onClick={() => addProductToCart(product)}
        >
          {t('product.command')}
        </button>

      </CardContent>
    </Card>
  );
};