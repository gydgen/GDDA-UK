import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, input, signal } from '@angular/core';

export interface CarouselTestimonial {
  id: string;
  quote: string;

}

interface CarouselSlide {
  key: string;
  testimonial: CarouselTestimonial;
}

@Component({
  selector: 'app-carousal',
  imports: [NgOptimizedImage],
  templateUrl: './carousal.html',
  styleUrl: './carousal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousal implements OnInit, OnDestroy {
  private readonly autoScrollDelayMs = 4500;
  private readonly firstRealSlideIndex = 1;
  private readonly transitionResetDelayMs = 40;
  private autoScrollIntervalId: ReturnType<typeof setInterval> | null = null;

  readonly testimonials = input<readonly CarouselTestimonial[]>([]);
  readonly activeTestimonialIndex = signal(this.firstRealSlideIndex);
  readonly isTransitionEnabled = signal(true);

  readonly carouselTestimonials = computed<readonly CarouselSlide[]>(() => {
    const baseTestimonials = this.testimonials();

    if (baseTestimonials.length === 0) {
      return [];
    }

    const firstTestimonial = baseTestimonials[0];
    const lastTestimonial = baseTestimonials[baseTestimonials.length - 1];

    return [
      { key: `clone-start-${lastTestimonial.id}`, testimonial: lastTestimonial },
      ...baseTestimonials.map((testimonial) => ({
        key: testimonial.id,
        testimonial,
      })),
      { key: `clone-end-${firstTestimonial.id}`, testimonial: firstTestimonial },
    ];
  });

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  nextTestimonial(): void {
    if (this.testimonials().length <= 1) {
      return;
    }

    this.isTransitionEnabled.set(true);
    this.activeTestimonialIndex.update((currentIndex) => currentIndex + 1);
  }

  pauseAutoScroll(): void {
    this.stopAutoScroll();
  }

  resumeAutoScroll(): void {
    this.startAutoScroll();
  }

  handleCarouselTransitionEnd(): void {
    const carouselLength = this.carouselTestimonials().length;
    const lastCloneSlideIndex = carouselLength - 1;

    if (this.activeTestimonialIndex() !== lastCloneSlideIndex) {
      return;
    }

    this.isTransitionEnabled.set(false);
    this.activeTestimonialIndex.set(this.firstRealSlideIndex);
    window.setTimeout(() => {
      this.isTransitionEnabled.set(true);
    }, this.transitionResetDelayMs);
  }

  private startAutoScroll(): void {
    if (this.autoScrollIntervalId !== null || this.testimonials().length <= 1) {
      return;
    }

    this.autoScrollIntervalId = setInterval(() => {
      this.nextTestimonial();
    }, this.autoScrollDelayMs);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollIntervalId === null) {
      return;
    }

    clearInterval(this.autoScrollIntervalId);
    this.autoScrollIntervalId = null;
  }
}
