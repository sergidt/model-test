export function toggleClass(el, zone, className = 'checked') {
  const a = el.nativeElement;
  a.classList.add(className);
  zone.runOutsideAngular(() => {
    setTimeout(() => {
      a.classList.remove(className);
    }, 2000);
  });
}
