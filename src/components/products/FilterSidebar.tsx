import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Checkbox } from "../ui/checkbox";
import { useTranslation } from "react-i18next";
import { Slider } from "../ui/slider";
interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  maxPrice: number;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onPriceChange: (value: [number, number]) => void;
  onSearchChange: (value: string) => void;
}
export const FilterSidebar = ({
  categories,
  selectedCategories,
  priceRange,
  maxPrice,
  searchTerm,
  onCategoryChange,
  onPriceChange,
  onSearchChange,
}: FilterSidebarProps) => {

  const { t } = useTranslation();
  return (
    <div className="w-full md:w-64 p-4 bg-card rounded-lg shadow-sm">
      <div className="mb-6">
        <h3 className="font-semibold mb-3">{t("search")}</h3>
        <Input
          type="search"
          placeholder={t("search_placeholder")}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-3">{t("price_range")}</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, maxPrice]}
            max={maxPrice}
            step={1}
            value={priceRange}
            onValueChange={onPriceChange}
            className="my-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{t("currency")} {priceRange[0]}</span>
            <span>{t("currency")} {priceRange[1]}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">{t('categories')}</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label className="text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};