import { HoverEffect } from '@/components/ui/HoverEffect';
import { useCallback, useRef } from 'react';

export function useHover() {
	const hoverEffectRef = useRef<HoverEffect | null>(null);

	return useCallback((element: HTMLElement | null) => {
		if (hoverEffectRef.current) {
			hoverEffectRef.current.dispose();
			hoverEffectRef.current = null;
		}

		if (element) {
			const hoverEffect = new HoverEffect(element);
			hoverEffect.mount();
			hoverEffectRef.current = hoverEffect;
		}
	}, []);
}
