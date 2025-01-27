"use client"

import CardPopularProducts from "@/app/dashboard/CardPopularProducts";
import CardSalesSummary from "@/app/dashboard/CardSalesSummary";
import CardPurchaseSummary from "@/app/dashboard/CardPurchaseSummary";
import CardExpenseSummary from "@/app/dashboard/CardExpenseSummary";
import StatCard from "@/app/dashboard/StatCard";
import {CheckCircle, Package, Tag, TrendingDown, TrendingUp} from "lucide-react";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
            <CardPopularProducts />
            <CardSalesSummary />
            <CardPurchaseSummary />
            <CardExpenseSummary />
            <StatCard
                title="Client & Expenses"
                primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
                details={[
                    {
                        title: "Client Growth",
                        amount: "175.00",
                        changePercent: 131,
                        IconComponent: TrendingUp,
                    },
                    {
                        title: "Expenses",
                        amount: "10.00",
                        changePercent: -56,
                        IconComponent: TrendingDown,
                    },
                ]}
                dateRange="22-29 January 2025"
            />
            <StatCard
                title="Dues & Pending Orders"
                primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
                details={[
                    {
                        title: "Dues",
                        amount: "250.00",
                        changePercent: 131,
                        IconComponent: TrendingUp,
                    },
                    {
                        title: "Pending Orders",
                        amount: "147.00",
                        changePercent: -56,
                        IconComponent: TrendingDown,
                    },
                ]}
                dateRange="22-29 January 2025"
            />
            <StatCard
                title="Sales & Discounts"
                primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
                details={[
                    {
                        title: "Sales",
                        amount: "1000.00",
                        changePercent: 20,
                        IconComponent: TrendingUp,
                    },
                    {
                        title: "Discount",
                        amount: "200.00",
                        changePercent: -10,
                        IconComponent: TrendingDown,
                    },
                ]}
                dateRange="22-29 January 2025"
            />
        </div>
    );
};

export default Dashboard;