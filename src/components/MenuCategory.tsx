import type { MenuCategory as MenuCategoryType } from "@/lib/just-relax-schema";
import MenuItemCard from "./MenuItemCard";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-50">
          {category.name}
        </h3>
        {category.description && (
          <p className="mt-1 text-xs text-slate-300">
            {category.description}
          </p>
        )}
      </div>
      <div className="space-y-3">
        {category.items.length > 0 ? (
          category.items.map((item) => (
            <MenuItemCard
              key={`${category.id}-${item.name}-${item.price ?? ""}`}
              item={item}
            />
          ))
        ) : (
          <p className="text-xs text-slate-400">
            Cette catégorie est prête à être remplie. Ajoutez vos plats dans{" "}
            <code>data/just-relax.json</code>, section{" "}
            <code>menus[].categories[].items</code>.
          </p>
        )}
      </div>
    </section>
  );
}