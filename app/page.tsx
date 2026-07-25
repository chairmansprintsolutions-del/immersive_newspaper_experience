import ImmersiveNewspaper from "@/components/ImmersiveNewspaper";

   const pages = [
     { heading: "Breaking: ...", credit: "Source: Reuters", body: "Full article text..." },
   ];

   export default function Home() {
     return <ImmersiveNewspaper pages={pages} />;
   }
