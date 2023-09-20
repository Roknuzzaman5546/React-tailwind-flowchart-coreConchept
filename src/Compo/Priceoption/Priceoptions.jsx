import Chart from "../Chartlist/Chart";
import Priceoption from "./Priceoption";

const Priceoptions = () => {

    const Priceopitons =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free weights area",
            "Cardio machines"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$50/month",
          "features": [
            "Access to all gym facilities",
            "Locker room access",
            "Personal trainer sessions (2/month)",
            "Group fitness classes"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": "$80/month",
          "features": [
            "Access for up to 4 family members",
            "Locker room access",
            "Childcare services",
            "Pool access"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-2xl">show best price</h2>
            <div className="grid md:grid-cols-3 gap-3 w-11/12 mx-auto"> 
            {
                Priceopitons.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
            </div>
            <Chart></Chart>
        </div>
    );
};

export default Priceoptions;