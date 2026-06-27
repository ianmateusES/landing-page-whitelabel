export const CONTACT_SECTION_ID = "contato";

type PlanSelectListener = (planId: string) => void;

let planSelectListener: PlanSelectListener | null = null;

export function contactHref(planId?: string): string {
  if (planId) {
    return `?plan=${encodeURIComponent(planId)}#${CONTACT_SECTION_ID}`;
  }
  return `#${CONTACT_SECTION_ID}`;
}

export function getPlanIdFromUrl(validIds: string[]): string | null {
  if (typeof window === "undefined") return null;

  const planId = new URLSearchParams(window.location.search).get("plan");
  return planId && validIds.includes(planId) ? planId : null;
}

export function registerContactPlanListener(listener: PlanSelectListener): () => void {
  planSelectListener = listener;
  return () => {
    if (planSelectListener === listener) {
      planSelectListener = null;
    }
  };
}

export function selectContactPlan(planId: string): void {
  window.history.pushState(null, "", contactHref(planId));
  planSelectListener?.(planId);
  document.getElementById(CONTACT_SECTION_ID)?.scrollIntoView({ behavior: "smooth" });
}
