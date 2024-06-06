import Items from "./items";
import { WEBSTORE, PRICING, RESOURCES, SUPPORT } from "./FooterLinks";
const FooterItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-3 py-6 text-center sm:grid-cols-2 lg:grid-cols-4 sm:px-8 text-wrap text-400">
      <Items Links={WEBSTORE} title="PRODUCTS" />
      <Items Links={PRICING} title="PRICING" />
      <Items Links={RESOURCES} title="RESOURCES" />
      <Items Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default FooterItemsContainer;
