export class HoverEffect {
	constructor(
		private readonly element: HTMLElement,
		private readonly threshold = 20
	) {
		this.mouseLeave = this.mouseLeave.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
	}
	
	mount(): void {
		this.element.addEventListener('mouseleave', this.mouseLeave);
		this.element.addEventListener('mousemove', this.mouseMove);
	}
	
	dispose(): void {
		this.element.removeEventListener('mouseleave', this.mouseLeave);
		this.element.removeEventListener('mousemove', this.mouseMove);
		this.element.style.removeProperty('transform');
	}
	
	private mouseLeave(): void {
		this.element.style.transform = `perspective(${this.element.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
	}
	
	private mouseMove(event: MouseEvent) {
		const { clientX, clientY, currentTarget } = event;
		const { clientWidth, clientHeight, offsetLeft, offsetTop } =
			currentTarget as HTMLDivElement;
		
		const horizontal = (clientX - offsetLeft) / clientWidth;
		const vertical = (clientY - offsetTop) / clientHeight;
		const rotateX = (vertical * this.threshold - this.threshold / 2).toFixed(2);
		const rotateY = (this.threshold / 2 - horizontal * this.threshold).toFixed(
			2
		);
		
		this.element.style.transform = `perspective(${clientWidth}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.07, 1.07, 1.07)`;
	}
}
