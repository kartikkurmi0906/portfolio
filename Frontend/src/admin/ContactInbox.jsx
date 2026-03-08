import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactInbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/contacts').then(res => setMessages(res.data));
  }, []);

  return (
    <div>
      <header className="mb-12">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Incoming_Signals</h2>
        <p className="text-[#FF8A50] text-[10px] tracking-widest mt-2">// DATA_PACKETS_RECEIVED: {messages.length}</p>
      </header>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#FF8A50]/40 transition-all">
            <div className="flex justify-between mb-4">
              <span className="text-white font-bold uppercase">{msg.name}</span>
              <span className="text-gray-600 text-[10px]">{new Date(msg.received_at).toLocaleString()}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{msg.message}</p>
            <div className="mt-4 pt-4 border-t border-white/5 text-[#FF8A50] text-[10px]">
              SOURCE_EMAIL: {msg.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInbox;