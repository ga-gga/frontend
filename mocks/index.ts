export async function initMSW() {
  if (!import.meta.env.DEV) return;

  if (typeof window === 'undefined') {
    const { server } = await import('../mocks/node');
    server.listen();
    return;
  }

  const { worker } = await import('../mocks/browser');
  return worker.start();
}
