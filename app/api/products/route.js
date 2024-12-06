import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");
    const category = searchParams.get("category"); // Category filter

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("test");
    const collection = db.collection("products");

    // Build the query
    const query = {};
    if (q) {
      query.name = { $regex: q, $options: "i" }; // Case-insensitive search
    }
    if (category) {
      query.category = category;
    }

    // Fetch data from MongoDB
    const products = await collection.find(query).limit(10).toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
