import { FilterSidebar } from "@/components/products/FilterSidebar";
import { ProductCard } from "@/components/products/ProductCard";

import { useState } from "react";
import { useTranslation } from "react-i18next";

// Sample data - in a real app this would come from an API
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 89,
    description: "Comfortable running shoes for professional athletes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sports",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 299,
    description: "Latest generation smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Backpack",
    price: 79,
    description: "Durable backpack for everyday use",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Accessories",
  },
];

const Index = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const categories = Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.category)));
  const maxPrice = Math.max(...SAMPLE_PRODUCTS.map((p) => p.price));

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">{t('our_product')}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">
              {t("no_product_found")}
            </p>
          )}
        </div>
        <FilterSidebar
          categories={categories}
          selectedCategories={selectedCategories}
          priceRange={priceRange}
          maxPrice={maxPrice}
          searchTerm={searchTerm}
          onCategoryChange={handleCategoryChange}
          onPriceChange={setPriceRange}
          onSearchChange={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default Index;