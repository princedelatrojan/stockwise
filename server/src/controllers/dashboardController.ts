import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        // Fetching popular products
        const popularProducts = await prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: "desc",
            },
        });

        // Fetching sales summary
        const salesSummary = await prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });

        // Fetching purchase summary
        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });

        // Fetching expense summary
        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });

        // Fetching expense by category summary
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });

        // Mapping amounts to string to avoid serialization issues
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => ({
            ...item,
            amount: item.amount?.toString() || "0", // Handling potential undefined `amount`
        }));

        // Sending response
        res.json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    } catch (error) {
        console.error("Error retrieving dashboard metrics:", error); // Improved logging for debugging
        res.status(500).json({ message: "Error retrieving dashboard metrics" });
    } finally {
        // Ensure PrismaClient is disconnected after each request to avoid resource leaks
        await prisma.$disconnect();
    }
};
