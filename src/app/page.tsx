import Header from "@/components/Header";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { InputLayoutType } from "@/globals";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-primary to-accent w-full">
        <Header />
        <div className="w-full flex p-8 justify-around text-white">
          <div className="max-w-[64%]">
            <h1 className="mb-9 font-bold text-center">
              {"Own more with each rent payment"}
            </h1>
            <h3 className="text-center">
              {"What does your dream home look like?"}
            </h3>
          </div>
        </div>
        <div className="w-full bg-paper rounded-[48px] h-[300px] relative">
          <div className="w-full h-8 absolute -top-4 flex justify-around">
            <div className="max-w-[48%] w-full h-8 shadow-card rounded-[16px] flex ">
              <TextField inputLayoutType={InputLayoutType.Leading} flex />
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
        </div>
      </div>
    </main>
  );
}
