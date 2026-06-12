export default function GlassCard({ as: Tag = 'article', className = '', children }) {
  return <Tag className={`glass-card ${className}`}>{children}</Tag>;
}
