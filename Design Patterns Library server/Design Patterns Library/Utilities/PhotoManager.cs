namespace Design_Patterns_Library.Utilities
{
    public static class PhotoManager
    {
        public static async Task<string> UploadPhotoAsync(IFormFile photo, string uploadFolder)
        {
            if (photo == null || photo.Length == 0)
            {
                throw new ArgumentException("Invalid photo file.");
            }

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var uniqueFileName = $"{Guid.NewGuid()}_{photo.FileName}";
            var filePath = Path.Combine(uploadFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await photo.CopyToAsync(stream);
            }

            return uniqueFileName;
        }

        public static void DeletePhoto(string photoUrl)
        {
            if (string.IsNullOrEmpty(photoUrl))
            {
                throw new ArgumentException("Invalid photo path.");
            }

            string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            string fileName = Path.GetFileName(new Uri(photoUrl).LocalPath);
            string filePath = Path.Combine(uploadsFolder, fileName);

            try
            {

                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
                else
                {
                    Console.WriteLine("File not found.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting file: {ex.Message}");
            }
        }
    }
}
