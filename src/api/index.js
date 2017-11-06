import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001', timeout: 60000 });

export function getQueues() {
  return api.get('/queue');
}

export function newQueue(queue) {
  return api.post('/queue', { queue });
}

export function editQueue(id, queueEdited) {
  return api.put(`/queue/${id}`, { queueEdited });
}

export function deleteQueue(id) {
  return api.delete(`/queue/${id}`);
}

export function newEntryForQueue(id) {
  return api.post(`/queue/${id}/entry`);
}

export function getQueueEntry(id) {
  return api.post(`/queue/${id}/entry`);
}
