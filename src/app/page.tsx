import Header from "@/components/Header";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { InputLayoutType } from "@/globals";
import Listing from "@/components/Listing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-primary to-accent w-full to-30%">
        <Header />
        <div className="w-full flex p-8 justify-around text-white">
          <div className="max-w-[64%]">
            <h1 className="mb-9 font-bold text-center md:text-headline2 sm:text-headline3">
              {"Own more with each rent payment"}
            </h1>
            <h3 className="text-center">
              {"What does your dream home look like?"}
            </h3>
          </div>
        </div>
        <div className="w-full bg-paper rounded-[48px] relative">
          <div className="w-full h-8 absolute -top-4 flex justify-around">
            <div className="max-w-[40%] w-full h-8 shadow-card rounded-[16px] flex ">
              <TextField
                inputLayoutType={InputLayoutType.Leading}
                flex
                placeholder="Enter a ZIP code..."
              />
              <SelectField
                inputLayoutType={InputLayoutType.Middle}
                options={[
                  "1 Bed",
                  "2 Beds",
                  "3 Beds",
                  "4 Beds",
                  "5 Beds",
                  "6+ Beds",
                ]}
              />
              <SelectField
                inputLayoutType={InputLayoutType.Middle}
                options={[
                  "1 Bath",
                  "1.5 Baths",
                  "2 Baths",
                  "2.5 Baths",
                  "3 Baths",
                  "3.5 Baths",
                  "4 Baths",
                  "4.5 Baths",
                  "5+ Baths",
                ]}
              />
              <Button
                inputLayoutType={InputLayoutType.Trailing}
                label="See Floor Plans"
                color="green"
                flex
              />
            </div>
          </div>
          <div className="w-full h-full p-10">
            <h5 className="mb-2">Hottest Floor Plans</h5>
            <ul className="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              <li>
                <Listing />
              </li>
              <li>
                <Listing />
              </li>
              <li>
                <Listing />
              </li>
              <li>
                <Listing />
              </li>
              <li>
                <Listing />
              </li>
              <li>
                <Listing />
              </li>
            </ul>
            <div className="w-full flex justify-center text-primary underline">
              <p>Load More Plans</p>
            </div>
          </div>
        </div>
        <div className="h-40 bg-gradient-to-b from-accent to-primary p-10">
          <div className="max-w-15">
            <Image
              src="assets/logos/Rentrigo-White.svg"
              alt="Rentrigo Logo"
              className="!relative"
              fill
            />
          </div>
        </div>
      </div>
    </main>
  );
}
