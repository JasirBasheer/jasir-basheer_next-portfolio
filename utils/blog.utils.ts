export function calculateReadingTime(content: string): string {
    const WORDS_PER_MINUTE = 150;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / WORDS_PER_MINUTE);
    
    return `${minutes} MIN READ`;
  }
  
  
  export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
  }
  