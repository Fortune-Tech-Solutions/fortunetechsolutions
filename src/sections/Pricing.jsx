import { useState } from "react";
import Card from "../components/Card";
import plansOptions from "../data/planOptions";
import planDetails from "../data/planDetails";

const Pricing = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [seeDetails, setSeeDetails] = useState(false);

    return (
        <div className="bg-base-200">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center pt-16">
                    <h2 className="text-4xl font-bold">Worth the Price</h2>
                    <p>You can choose from our different plans that fits for your needs.</p>
                </div>

                <div className="pt-8 px-4">





                    <div className="w-full pt-8 pb-16 px-2">
                        <div className="my-4 grid place-content-center sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                            {
                                plansOptions.map((plan, index) => (
                                    <Card
                                        key={plan.title}
                                        title={plan.title}
                                        badge={plan.badge}
                                        value={plan.value}
                                        body={plan.body}
                                        actions={plan.actions}
                                        className={index === 3 ? "lg:col-start-2" : ""}
                                    />
                                ))
                            }
                        </div>

                        <div className="text-center underline mt-16 cursor-pointer" onClick={() => setSeeDetails(!seeDetails)}>
                            {
                                seeDetails ? <span>Hide</span> : <span>See</span>
                            }
                            &nbsp;details...
                        </div>


                        {
                            seeDetails ?

                                <div className="mt-16">
                                    <div className="text-2xl font-bold mb-2 text-center">Details</div>
                                    <div className="flex justify-center">
                                        <div className="label">
                                            <label htmlFor="radio1"
                                                className={`${activeTab === 1 ? "border bg-secondary text-primary" : "border-b dark:border-base-content"} border-primary cursor-pointer p-2`}
                                            >
                                                Basic
                                            </label>
                                            <input
                                                id="radio1"
                                                type="radio"
                                                name="my_tabs_1"
                                                aria-label="Basic"
                                                className="hidden"
                                                defaultChecked
                                                onChange={() => setActiveTab(1)}
                                            />
                                        </div>
                                        <div className="label">
                                            <label htmlFor="radio2"
                                                className={`${activeTab === 2 ? "border bg-secondary text-primary" : "border-b dark:border-base-content"} border-primary cursor-pointer p-2`}
                                            >
                                                Advanced
                                            </label>
                                            <input
                                                id="radio2"
                                                type="radio"
                                                name="my_tabs_1"
                                                className="hidden"
                                                aria-label="Advanced"
                                                onChange={() => setActiveTab(2)}
                                            />
                                        </div>
                                        <div className="label">
                                            <label htmlFor="radio3"
                                                className={`${activeTab === 3 ? "border bg-secondary text-primary" : "border-b dark:border-base-content"} border-primary cursor-pointer p-2`}
                                            >
                                                Premium
                                            </label>
                                            <input
                                                id="radio3"
                                                type="radio"
                                                name="my_tabs_1"
                                                className="hidden"
                                                aria-label="Premium"
                                                onChange={() => setActiveTab(3)}
                                            />
                                        </div>
                                        <div className="label">
                                            <label htmlFor="radio4"
                                                className={`${activeTab === 4 ? "border bg-secondary text-primary" : "border-b dark:border-base-content"} border-primary cursor-pointer p-2`}
                                            >
                                                Custom
                                            </label>
                                            <input
                                                id="radio4"
                                                type="radio"
                                                name="my_tabs_1"
                                                className="hidden"
                                                aria-label="Custom"
                                                onChange={() => setActiveTab(4)}
                                            />
                                        </div>
                                    </div>


                                    {
                                        planDetails.map((planDetail, index) => (

                                            // render chosen tab
                                            activeTab === index + 1 ?
                                                <div key={index}>
                                                    <div className="grid grid-cols-2 bg-white dark:bg-black border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                        <div className="p-2 text-center text-xl text-base-content/70">Features</div>
                                                        <div className="p-2 text-center text-xl font-bold">{planDetail.package}</div>
                                                    </div>

                                                    <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                        <div className="p-2 text-lg">IT Support and Helpdesk</div>
                                                        {planDetail.feature1}
                                                    </div>

                                                    <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                        <div className="p-2 text-lg">Website Development and Design</div>
                                                        {planDetail.feature2}
                                                    </div>

                                                    <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                        <div className="p-2 text-lg">Consultation Services</div>
                                                        {planDetail.feature3}
                                                    </div>

                                                    <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                        <div className="p-2 text-lg">CRM Setup and Maintenance</div>
                                                        {planDetail.feature4}
                                                    </div>

                                                    <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                        <div className="p-2 text-lg">Additional Services</div>
                                                        {planDetail.feature5}
                                                    </div>

                                                    <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-y">
                                                        <div className="p-2 text-lg">Phone System Setup and Maintenance</div>
                                                        {planDetail.feature6}
                                                    </div>
                                                </div>
                                                : null
                                        ))
                                    }

                                </div>
                                :
                                null
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;
