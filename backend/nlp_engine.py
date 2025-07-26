import re
from data_loader import get_top_products, get_order_status, get_stock

def handle_query(message: str) -> str:
    message = message.lower()

    if "top" in message and "sold" in message:
        return "\n".join(get_top_products())

    match = re.search(r"order id (\d+)", message)
    if match:
        return get_order_status(match.group(1))

    match = re.search(r"how many (.+) (in stock|left)", message)
    if match:
        product_name = match.group(1).strip()
        return get_stock(product_name)

    return "Sorry, I didn't understand that. Please ask about top products, order status, or stock."
