import Category from "./Category";

const Categories = ({ allItems }) => {

    return (
        <div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        allItems.map(item => <Category key={item._id} item={item}></Category>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Categories;