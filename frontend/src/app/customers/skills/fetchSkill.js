export default async function fetchCustomer(id) {
    const res = await fetch(`http://127.0.0.1:5000/skills?customer_id=${id}`, {method: 'GET',  headers: {'Content-Type': 'application/json'}, cache: "no-cache"});
    if (!res.ok) {
      throw new Error('Failed to fetch skill');
    }
    return res.json();
  }