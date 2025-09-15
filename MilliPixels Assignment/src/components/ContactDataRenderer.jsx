import { useMemo,useState} from "react";

export default function ContactDataRenderer({ contacts }) {
    const[query, setQuery] = useState("");

    const normalizedQuery = query.trim().toLowerCase();

    const filtered = useMemo( () => {
        if (!normalizedQuery) return contacts;
        return contacts.filter ( (c) => {
            const name = c.name?.toLowerCase?.() || "";
            const email = c.email?.toLowerCase?.() || "";
            return name.includes(normalizedQuery) || email.includes(normalizedQuery);
        })
    }, [contacts, normalizedQuery] );

    return (
        <div className="conatcts">
            <div className="controls">
                <input 
                  type="text"
                  placeholder="Search by name or email..."
                  value={query}
                  onChange={ (e) => setQuery(e.target.value)}
                  className="filter"
                  aria-label="Filter contacts"
                />
                <span className="count" aria-live="polite">
                    {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                    </span>
                    </div>

                    <ul className="list" role="list">
                        {filtered.map((c) => (
                    <li key={c.id} className="item">
                        <div className="name">{c.name}</div>
                        <div className="meta">
                            <a className="email" href={`mailto:${c.email}`}>
                                {c.email}
                            </a>
                            <a className="phone" href={'tel :${c.phone}'}>
                                {c.phone}
                            </a>
                        </div>
                    </li>
                ))}
                {!filtered.length && (
                   <li className="empty">No contacts match your search.</li>
                )}
            </ul>
        </div>
            );
        }