import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface contentData {
  name: string;
  year: string;
  institute: string;
}

interface DynamicTabDataProps {
  title: string;
  value: string;
  contentData: contentData[];
}

const DynamicTab = ({ data }: any) => {
  return (
    <Tabs defaultValue={data[0].value} className="flex   flex-col">
      <TabsList className="self-center">
        {data.map((tab: any) => (
          <TabsTrigger key={tab.title} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((tab: any) => (
        <TabsContent key={tab.title} value={tab.value}>
          <div className="flex flex-col gap-4">
            {tab.contentData.map((data: any) => (
              <div key={data.name} className="flex flex-col ">
                <div className="flex flex-row justify-between">
                  <p className="">{data.name}</p>
                  <p className="dark:text-gray-500">{data.year}</p>
                </div>
                <p className="dark:text-gray-500">{data.institute}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DynamicTab;
