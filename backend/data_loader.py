import pandas as pd

products_df = pd.read_csv("ecommerce-dataset/products.csv")
orders_df = pd.read_csv("ecommerce-dataset/orders.csv")

def get_top_products(n=5):
    top = products_df.sort_values(by="total_sold", ascending=False).head(n)
    return [f"{row['product_name']} ({row['total_sold']} sold)" for _, row in top.iterrows()]

def get_order_status(order_id):
    order = orders_df[orders_df["order_id"] == int(order_id)]
    if not order.empty:
        return f"Order {order_id} is currently '{order.iloc[0]['status']}'"
    return "Order not found."

def get_stock(product_name):
    product = products_df[products_df["product_name"].str.lower() == product_name.lower()]
    if not product.empty:
        return f"{product_name} has {int(product.iloc[0]['stock'])} units left."
    return "Product not found."
