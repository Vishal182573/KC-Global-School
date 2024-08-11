"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const FeeInformation: React.FC = () => {
    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Fee Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4 list-disc pl-5">
                    <li>The time period for depositing the fee is up to the 10th of the month.</li>
                    <li>
                        Payment schedule:
                        <ul className="ml-6 mt-2 space-y-1 list-disc">
                            <li>April - May - June: up to <span className="text-red-600 font-semibold">10th April</span></li>
                            <li>July - Aug - Sept: up to <span className="text-red-600 font-semibold">10th July</span></li>
                            <li>Oct - Nov - Dec: up to <span className="text-red-600 font-semibold">10th Oct</span></li>
                            <li>Jan - Feb - March: up to <span className="text-red-600 font-semibold">10th Jan</span></li>
                        </ul>
                    </li>
                    <li>Payment can be made at the school counter during school hours</li>
                    <li>
                        Online IMPS/NEFT can be done:
                        <ul className="ml-6 mt-2 space-y-1 list-none text-blue-600">
                            <li>A/c: 002588700000059</li>
                            <li>IFSC: YESB0000025</li>
                            <li>Branch: Yes Bank Surajpur</li>
                        </ul>
                    </li>
                </ul>
                <Button
                    variant="outline"
                    className="mt-4 border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => window.location.href = "https://www.google.com"}
                >
                    Click to View Fee Structure
                </Button>

            </CardContent>
        </Card>
    );
};

export default FeeInformation;