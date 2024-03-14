import Items from "./items";
import { WEBSTORE, PRICING, RESOURCES, SUPPORT } from "./FooterLinks";
const FooterItemsContainer = () =>{
 return(

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:px-8 px-5 py-16 text-center  text-wrap pt-2 
    text-400 text-sm pb-8">
      <Items Links={WEBSTORE} title="PRODUCTS" />
      <Items Links={PRICING} title="RESOURCES" />
      <Items Links={RESOURCES} title="RESOURCES" />
      <Items Links={SUPPORT} title="SUPPORT" />

    </div>
   

    );

};

export default FooterItemsContainer;