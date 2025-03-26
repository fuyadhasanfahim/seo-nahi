'use client';

import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

export default function CaseStudiesPage() {
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

    const caseStudies = [
        {
            id: 1,
            industry: 'E-commerce',
            client: 'TechGear Online Store',
            challenge:
                'Low organic search visibility and stagnant online sales',
            solution:
                'Comprehensive SEO strategy focusing on technical optimization, content marketing, and targeted keyword research',
            results: {
                organicTraffic: '+245%',
                conversions: '+160%',
                revenue: '$1.2M additional annual revenue',
            },
            fullStory: `
        TechGear Online Store approached us with a critical challenge: their e-commerce platform was virtually invisible in search results. 
        Our comprehensive SEO strategy involved:

        1. Technical Website Audit
        - Resolved over 150 technical SEO issues
        - Improved site speed by 68%
        - Enhanced mobile responsiveness

        2. Content Strategy
        - Developed 50+ long-form, keyword-optimized product guides
        - Created a content hub addressing customer pain points
        - Implemented schema markup for rich search results

        3. Link Building & Authority
        - Secured 75+ high-quality backlinks from tech and review sites
        - Developed partnerships with industry influencers
        - Created linkable assets like comparison guides and industry reports

        The results were transformative. Within 8 months, TechGear saw a dramatic increase in organic visibility, 
        significantly boosting their online sales and establishing themselves as a top player in their market.
      `,
        },
        {
            id: 2,
            industry: 'Local Service',
            client: 'City Plumbers Pro',
            challenge:
                'Limited local search presence and minimal lead generation',
            solution:
                'Hyper-local SEO strategy with Google My Business optimization and targeted content',
            results: {
                googleMapRankings: '+320%',
                phoneLeads: '+202%',
                revenue: '$750K additional annual revenue',
            },
            fullStory: `
        City Plumbers Pro was struggling to attract local customers in a competitive market. 
        Our localized SEO approach included:

        1. Google My Business Optimization
        - Complete profile enhancement
        - Consistent NAP (Name, Address, Phone) across platforms
        - Encouraged and managed customer reviews

        2. Localized Content Strategy
        - Created neighborhood-specific service pages
        - Developed FAQ content addressing local plumbing concerns
        - Implemented local schema markup

        3. Citation and Backlink Building
        - Built 50+ local business citations
        - Secured backlinks from local business associations
        - Created partnerships with local home improvement websites

        The results were immediate and substantial. City Plumbers Pro transformed from a virtually invisible 
        local business to a dominant player in their service area.
      `,
        },
        {
            id: 3,
            industry: 'B2B Technology',
            client: 'CloudSoft Solutions',
            challenge: 'Low B2B lead generation and minimal thought leadership',
            solution:
                'Content-driven SEO strategy with technical depth and strategic keyword targeting',
            results: {
                organicLeads: '+175%',
                averageRankings: 'Top 3 for 20+ keywords',
                revenue: '$2.1M pipeline growth',
            },
            fullStory: `
        CloudSoft Solutions needed to establish authority in the competitive B2B tech space. 
        Our strategy focused on:

        1. Technical Content Marketing
        - Developed in-depth whitepapers and technical guides
        - Created a robust blog with cutting-edge industry insights
        - Implemented advanced keyword targeting

        2. Thought Leadership
        - Secured guest posting on top industry publications
        - Developed strategic landing pages for key service offerings
        - Created an interactive ROI calculator

        3. Technical SEO Optimization
        - Enhanced site architecture for complex B2B conversion paths
        - Implemented advanced schema markup
        - Optimized for featured snippets and position zero

        The comprehensive approach transformed CloudSoft's online presence, positioning them 
        as a thought leader and significantly accelerating their lead generation.
      `,
        },
    ];

    interface CaseStudy {
        id: number;
        industry: string;
        client: string;
        challenge: string;
        solution: string;
        results: {
            organicTraffic?: string;
            conversions?: string;
            revenue?: string;
            googleMapRankings?: string;
        };
        fullStory: string;
    }

    const openStudyDetails = (study: CaseStudy): void => {
        setSelectedStudy(study);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Our Success Stories
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    {`Real results, tangible growth. Explore how we've transformed
                    businesses across different industries through strategic
                    SEO.`}
                </p>
            </div>

            <Tabs defaultValue="all" className="mb-12">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="all">All Industries</TabsTrigger>
                    <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                    <TabsTrigger value="local">Local Business</TabsTrigger>
                    <TabsTrigger value="b2b">B2B Technology</TabsTrigger>
                </TabsList>

                <div className="grid md:grid-cols-3 gap-6">
                    {caseStudies.map((study) => (
                        <Card
                            key={study.id}
                            className="hover:shadow-lg transition-all cursor-pointer"
                            onClick={() => openStudyDetails(study)}
                        >
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle>{study.client}</CardTitle>
                                    <span className="text-sm text-muted-foreground">
                                        {study.industry}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <TrendingUp
                                            className="text-primary"
                                            size={20}
                                        />
                                        <span className="font-semibold text-primary">
                                            {study.results.organicTraffic}{' '}
                                            Traffic Growth
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground">
                                        {study.challenge}
                                    </p>
                                    <Button variant="outline" size="sm">
                                        View Case Study
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Tabs>

            {selectedStudy && (
                <Dialog
                    open={!!selectedStudy}
                    onOpenChange={() => setSelectedStudy(null)}
                >
                    <DialogContent className="max-w-4xl">
                        <DialogHeader>
                            <DialogTitle>
                                {selectedStudy.client} Case Study
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">
                                    Challenge
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {selectedStudy.challenge}
                                </p>

                                <h3 className="text-xl font-semibold mb-4">
                                    Our Solution
                                </h3>
                                <p className="text-muted-foreground">
                                    {selectedStudy.solution}
                                </p>
                            </div>
                            <div>
                                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                                    <h3 className="text-xl font-semibold mb-4 text-primary">
                                        Remarkable Results
                                    </h3>
                                    {Object.entries(selectedStudy.results).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex justify-between mb-2"
                                            >
                                                <span className="font-medium capitalize">
                                                    {key.replace(
                                                        /([A-Z])/g,
                                                        ' $1'
                                                    )}
                                                </span>
                                                <span className="font-bold text-primary">
                                                    {value}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                                <Button
                                    className="w-full"
                                    onClick={() => setSelectedStudy(null)}
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            <div className="bg-primary/10 rounded-lg p-12 text-center mt-16">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Ready to Write Your Success Story?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    {`Every business has unique challenges. Let's discuss how we
                    can create a custom SEO strategy that drives your growth.`}
                </p>
                <Button size="lg">Get Your Free SEO Audit</Button>
            </div>
        </div>
    );
}
