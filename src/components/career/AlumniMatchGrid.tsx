import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { alumniData, type AlumniProfile } from "@/data/alumniJourneys";

interface AlumniMatchGridProps {
  onSelectAlumni: (alumni: AlumniProfile) => void;
}

export function AlumniMatchGrid({ onSelectAlumni }: AlumniMatchGridProps) {
  const [targetRole, setTargetRole] = useState("");
  const [searched, setSearched] = useState(false);

  const filteredAlumni = searched && targetRole.trim()
    ? alumniData.filter((a) =>
        a.targetRoles.some((r) => r.toLowerCase().includes(targetRole.toLowerCase())) ||
        a.currentRole.toLowerCase().includes(targetRole.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    if (targetRole.trim()) setSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-2">Find Your Alumni Guide</h2>
        <p className="text-muted-foreground">
          Enter your target job role to find alumni who've walked that path
        </p>
      </div>

      <div className="flex gap-2 max-w-xl mx-auto mb-8 animate-slide-up opacity-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="e.g. Software Engineer, Data Scientist, Product Manager..."
            value={targetRole}
            onChange={(e) => { setTargetRole(e.target.value); setSearched(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch} disabled={!targetRole.trim()}>
          Search
        </Button>
      </div>

      {searched && filteredAlumni.length === 0 && (
        <p className="text-center text-muted-foreground animate-fade-in">
          No alumni found for "{targetRole}". Try "Software Engineer", "Data Scientist", or "Product Manager".
        </p>
      )}

      {filteredAlumni.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4 animate-slide-up opacity-0">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="card-hover cursor-pointer group" onClick={() => onSelectAlumni(alumni)}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      {alumni.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{alumni.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {alumni.currentRole} at {alumni.company}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {alumni.college} • Batch {alumni.batch}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {alumni.targetRoles.map((role) => (
                    <Badge key={role} variant="secondary" className="text-xs">
                      {role}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {alumni.journey.reduce((sum, s) => sum + s.tasks.length, 0)} tasks across 4 levels
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Follow This Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!searched && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up opacity-0 stagger-1">
          {alumniData.map((alumni) => (
            <Card key={alumni.id} className="card-hover cursor-pointer text-center" onClick={() => { setTargetRole(alumni.targetRoles[0]); onSelectAlumni(alumni); }}>
              <CardContent className="pt-6">
                <Avatar className="h-12 w-12 mx-auto mb-3 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
                    {alumni.avatar}
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold text-sm">{alumni.name}</p>
                <p className="text-xs text-muted-foreground">{alumni.currentRole}</p>
                <p className="text-xs text-muted-foreground">{alumni.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
