import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Product } from "@/interfaces/admin";

import http from "@/utils/http";
import { apiRoutes } from "@/routes/api";
import { handleErrorResponse } from "@/utils";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { StarIcon } from "lucide-react";

import ListProductSkeleton from "@/components/skeleton/ListProductSkeleton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ReviewCustomer from "@/components/products/ReviewCustomer";
import RelatedProduct from "@/components/products/RelatedProduct";

export const SingleProduct = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: product } = useQuery<Product>({
    queryKey: ["product"],
    queryFn: () =>
      http
        .get<Product>(apiRoutes.products + `/${id}`)
        .then((res) => {
          return res.data;
        })
        .catch((e) => {
          handleErrorResponse(e);
          return {};
        }),
  });

  console.log("id : ", id);
  console.log("product : ", product);
  return (
    // test loading if load show skeleton like single product skeleto
    // if not show single product
    isLoading ? (
      <ListProductSkeleton />
    ) : (
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-3 items-start">
          <div className="grid gap-4">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={600}
              height={900}
              className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
            />
            <div className="hidden md:grid grid-cols-4 gap-3">
              <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={120}
                  className="aspect-[5/6] object-cover"
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={120}
                  className="aspect-[5/6] object-cover"
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={120}
                  className="aspect-[5/6] object-cover"
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={120}
                  className="aspect-[5/6] object-cover"
                />
                <span className="sr-only">View Image 4</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product?.name}</h1>
            <div>
              <p></p>
            </div>
            {/* <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <div className="text-sm text-muted-foreground">(12 reviews)</div>
            </div> */}
            <div className="text-4xl font-bold">
              {" "}
              {product.price} {t("currency")}{" "}
            </div>
          </div>

          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            {product?.description}
          </div>
          <form className="grid gap-4 md:gap-10">
            <Button size="lg">{t("product.command")}</Button>
          </form>
          {/* <div className="grid gap-4">
            <h2 className="font-bold text-lg">Customer Reviews</h2>
         <ReviewCustomer/>
         <ReviewCustomer/>

          
          </div> */}
          <div className="grid gap-4">
            <h2 className="font-bold text-lg">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <RelatedProduct />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default SingleProduct;
