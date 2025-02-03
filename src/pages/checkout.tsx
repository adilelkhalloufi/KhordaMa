import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import EmptyStateComponent from "@/components/dashboard/custom/emptyState";
import { IconBasket, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { webRoutes } from "@/routes/web";
import { Badge } from "@/components/ui/badge";
import i18next from "i18next";
import { removeProduct } from "@/store/slices/cartSlice";
import { Product } from "@/interfaces/admin";

export default function Component() {
  const products : Product[] = useSelector((state: RootState) => state.cart.products);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <main className="container mx-auto my-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-2xl font-bold">{t("checkout.title")}</h1>
          <div className="mt-4 space-y-4">
            {/* if cart vide show message the basket is vide */}
            {products.length === 0 && (
              <EmptyStateComponent
                title={t("checkout.empty")} 
                description={t("checkout.empty.button")}
                icon={<IconBasket className="w-12 h-12" />}
                buttonTitle={t("checkout.empty.button")}  
                onclick={() => (
                  navigate(webRoutes.stagnant), { replace: true }
                )} // if click go to products page
              />
            )}
            {/* if cart not vide show product in cart */}
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950"
              >
                <img
                  src={product.image}
                  width={80}
                  height={80}
                  alt="Product Image"
                  className="rounded-md"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 flex flex-row items-center gap-2">
                    <div>
                      <span className="mr-2 font-medium">
                        {t("product.categorie")} :
                      </span>
                      <Badge>{product.categorie?.name[i18next.language]}</Badge>
                    </div>
                    <div>
                      <span className="mr-2 font-medium">
                        {t("product.unite")} :
                      </span>
                      <Badge>{product.unite?.name[i18next.language]}</Badge>
                    </div>
                  </p>
                </div>

 
                <div className="text-right font-medium">
                  {product.price} {t("currency")}
                </div>
                {/* add button to delete from checkout */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                     dispatch(removeProduct(product));
                  }}
                >
                    <IconTrash color="red"  />
                   
                </Button>
                
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('checkout.summary')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>{t('checkout.total')}</span>
                {/* calculate total montant product */}
                <span>{products.reduce((acc, product) => acc + product.price, 0)} {t('currency')}</span>
               </div>
              <div className="flex items-center justify-between">
                <span>{t('checkout.discount')}</span>
                <span>0</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>{t('checkout.total')}</span>
                <span>{products.reduce((acc, product) => acc + product.price, 0)} {t('currency')}</span>
                  </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('checkout.payement')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="address">{t('checkout.note')}</Label>
                <Textarea id="address" placeholder="123 Adress" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment">{t('checkout.type.payement')}</Label>
                <Select id="payment">
                  <SelectTrigger>
                    <SelectValue placeholder={t('checkout.type.payement')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit-card">Credit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                   </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {t('checkout.command')}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </React.Fragment>
  );
}
