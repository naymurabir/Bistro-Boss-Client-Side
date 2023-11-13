import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import Categories from "./Categories";

import './TabItems.css'
import { useParams } from "react-router-dom";


const TabItems = () => {

    const [menu] = useMenu()

    const { category } = useParams()
    console.log(category);

    const saladItems = menu.filter(singleItem => singleItem.category === "salad")
    const pizzaItems = menu.filter(singleItem => singleItem.category === "pizza")
    const soupItems = menu.filter(singleItem => singleItem.category === "soup")
    const dessertItems = menu.filter(singleItem => singleItem.category === "dessert")
    const drinksItems = menu.filter(singleItem => singleItem.category === "drinks")


    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 mt-10">
            <Tabs>
                <TabList className="py-2 m-auto text-center font-semibold">
                    <Tab>All Items</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                    <hr className="w-[50%] mx-auto my-3" />
                </TabList>

                <TabPanel>
                    <Categories allItems={menu}></Categories>
                </TabPanel>

                <TabPanel>
                    <Categories allItems={saladItems}></Categories>
                </TabPanel>

                <TabPanel>
                    <Categories allItems={pizzaItems}></Categories>
                </TabPanel>

                <TabPanel>
                    <Categories allItems={soupItems}></Categories>
                </TabPanel>

                <TabPanel>
                    <Categories allItems={dessertItems}></Categories>
                </TabPanel>
                <TabPanel>
                    <Categories allItems={drinksItems}></Categories>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default TabItems;