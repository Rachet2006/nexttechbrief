import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name, email } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  const { data, error } = await supabase.from('subscribers').insert([{ name, email }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Subscribed successfully!' });
};
