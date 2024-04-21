"use client";
import { cn } from "@/util/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	                                 className,
	                                 children,
	                                 showRadialGradient = true,
	                                 ...props
                                 }: AuroraBackgroundProps) => {
	return (
		<main>
			<div
				className={cn(
					"relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-950  text-slate-950 transition-bg",
					className
				)}
				{...props}
			>
				<div className="absolute inset-0 overflow-hidden">
					<div
						//   I'm sorry but this is what peak developer performance looks like // trigger warning
						className={cn(
							`
            [--red-gradient:repeating-linear-gradient(100deg,var(--red)_0%,var(--red)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--red)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--red-700)_10%,var(--red-700)_15%,var(--red-700)_20%,var(--red-700)_25%,var(--red-900)_30%)]
            [background-image:var(--red-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--red-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
							
							showRadialGradient &&
							`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
						)}
					></div>
				</div>
				{children}
			</div>
		</main>
	);
};
