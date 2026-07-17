"use client";

import { useState } from "react";
import { physicsFormulas, chemistryFormulas, type FormulaSection } from "@/data/formulas";
import { Atom, FlaskConical, ChevronDown, ChevronUp, Search } from "lucide-react";

function FormulaSectionCard({ section, icon }: { section: FormulaSection; icon: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-lg font-semibold">{section.title}</h3>
          <span className="text-xs text-gray-500">({section.formulas.length})</span>
        </div>
        {expanded ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      {expanded && (
        <div className="px-5 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {section.formulas.map((f, i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <p className="text-sm font-medium mb-1">{f.name}</p>
                <p className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-1">{f.formula}</p>
                {f.description && <p className="text-xs text-gray-500">{f.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FormulasPage() {
  const [tab, setTab] = useState<"physics" | "chemistry">("physics");
  const [search, setSearch] = useState("");

  const formulas = tab === "physics" ? physicsFormulas : chemistryFormulas;
  const filtered = formulas.map((section) => ({
    ...section,
    formulas: section.formulas.filter(
      (f) =>
        !search ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.formula.toLowerCase().includes(search.toLowerCase()) ||
        f.description.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((s) => s.formulas.length > 0);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Formula Sheet</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Quick reference for all essential Physics and Chemistry formulas
        </p>
      </div>

      {/* Tabs + Search */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("physics")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              tab === "physics" ? "bg-amber-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            <Atom className="h-4 w-4" /> Physics
          </button>
          <button
            onClick={() => setTab("chemistry")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              tab === "chemistry" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            <FlaskConical className="h-4 w-4" /> Chemistry
          </button>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search formulas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm outline-none w-48"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {filtered.map((section) => (
          <FormulaSectionCard
            key={section.title}
            section={section}
            icon={tab === "physics" ? <Atom className="h-5 w-5 text-amber-500" /> : <FlaskConical className="h-5 w-5 text-blue-500" />}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No formulas match your search.</p>
        )}
      </div>
    </div>
  );
}
