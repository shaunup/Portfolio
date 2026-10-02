"use client";

import React, { useState, useCallback, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, RotateCcw, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/projects/project-card";
import { type Project } from "@/content/types";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "embedded", label: "Embedded" },
  { id: "robotics", label: "Robotics" },
  { id: "full-stack", label: "Full Stack" },
  { id: "mobile", label: "Mobile" },
  { id: "machine-learning", label: "ML" },
  { id: "data", label: "Data" },
  { id: "blockchain", label: "Blockchain" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "experiment", label: "Experiments" },
] as const;

const SORT_OPTIONS = [
  { id: "newest", label: "Newest first" },
  { id: "featured", label: "Featured" },
  { id: "depth", label: "Technical depth" },
] as const;

type Category = (typeof FILTER_CATEGORIES)[number]["id"];
type Sort = (typeof SORT_OPTIONS)[number]["id"];

function filterAndSort(
  projects: Project[],
  category: Category,
  sort: Sort,
  search: string
): Project[] {
  let filtered = [...projects];

  // Category filter
  if (category === "featured") {
    filtered = filtered.filter((p) => p.featured);
  } else if (category !== "all") {
    filtered = filtered.filter((p) => p.categories.includes(category as string & typeof p.categories[number]));
  }

  // Search
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.disciplines.some((d) => d.toLowerCase().includes(q))
    );
  }

  // Sort
  if (sort === "featured") {
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99);
    });
  } else if (sort === "newest") {
    filtered.sort((a, b) => b.year - a.year);
  } else if (sort === "depth") {
    filtered.sort(
      (a, b) => (b.engineeringDecisions?.length ?? 0) - (a.engineeringDecisions?.length ?? 0)
    );
  }

  return filtered;
}

export function ProjectsClientPage({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [category, setCategory] = useState<Category>(
    (searchParams.get("category") as Category) || "all"
  );
  const [sort, setSort] = useState<Sort>("newest");
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const filtered = filterAndSort(projects, category, sort, search);

  const handleCategory = useCallback(
    (cat: Category) => {
      setCategory(cat);
      startTransition(() => {
        const params = new URLSearchParams();
        if (cat !== "all") params.set("category", cat);
        if (search) params.set("q", search);
        router.replace(`/work${params.size > 0 ? `?${params}` : ""}`, {
          scroll: false,
        });
      });
    },
    [search, router]
  );

  const handleReset = () => {
    setCategory("all");
    setSort("newest");
    setSearch("");
    router.replace("/work", { scroll: false });
  };

  const isFiltered = category !== "all" || search !== "";

  return (
    <div>
      {/* Page header */}
      <div className="bg-card/50 border-b border-border py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Work"
            title="Systems I've built, tested, and learned from."
            description="My work spans different technologies, but the underlying approach is consistent: understand the problem, identify the risky assumptions, build a working system, and improve it through evidence."
            className="max-w-3xl"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search projects or technologies…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-sm bg-muted/50 border border-border rounded-md placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                aria-label="Search projects"
              />
            </div>

            {/* Category chips */}
            <div
              className="flex flex-wrap gap-1.5 flex-1"
              role="group"
              aria-label="Filter by category"
            >
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                    category === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  )}
                  aria-pressed={category === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort + Reset */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative">
                <SlidersHorizontal
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none"
                  aria-hidden="true"
                />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-muted/50 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                  aria-label="Sort projects"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              {isFiltered && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                  aria-label="Reset all filters"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{filtered.length}</span>{" "}
            project{filtered.length !== 1 ? "s" : ""}
            {isFiltered && " matching filters"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="font-medium text-foreground">No projects found</p>
            <p className="text-sm text-muted-foreground max-w-sm">
              Try adjusting the filters or search query.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset filters
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${search}-${sort}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
