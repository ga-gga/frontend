export async function initMSW() {
  if (!import.meta.env.DEV) return;

  if (typeof window === 'undefined') {
    const { server } = await import('./node');
    server.listen();
    return;
  }

  const { worker } = await import('./browser');
  return worker.start();
}
