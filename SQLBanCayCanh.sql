USE [master]
GO
/****** Object:  Database [BanCayCanh]    Script Date: 4/27/2024 2:18:14 PM ******/
CREATE DATABASE [BanCayCanh]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BanCayCanh', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\BanCayCanh.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BanCayCanh_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\BanCayCanh_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [BanCayCanh] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BanCayCanh].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BanCayCanh] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BanCayCanh] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BanCayCanh] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BanCayCanh] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BanCayCanh] SET ARITHABORT OFF 
GO
ALTER DATABASE [BanCayCanh] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BanCayCanh] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BanCayCanh] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BanCayCanh] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BanCayCanh] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BanCayCanh] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BanCayCanh] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BanCayCanh] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BanCayCanh] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BanCayCanh] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BanCayCanh] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BanCayCanh] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BanCayCanh] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BanCayCanh] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BanCayCanh] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BanCayCanh] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BanCayCanh] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BanCayCanh] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BanCayCanh] SET  MULTI_USER 
GO
ALTER DATABASE [BanCayCanh] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BanCayCanh] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BanCayCanh] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BanCayCanh] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BanCayCanh] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BanCayCanh] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [BanCayCanh] SET QUERY_STORE = ON
GO
ALTER DATABASE [BanCayCanh] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [BanCayCanh]
GO
/****** Object:  Table [dbo].[CayCanh]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CayCanh](
	[MaCayCanh] [int] IDENTITY(1,1) NOT NULL,
	[TenCayCanh] [nvarchar](100) NOT NULL,
	[MaTheLoaiCayCanh] [int] NULL,
	[SoLuong] [int] NULL,
	[GhiChu] [nvarchar](max) NULL,
	[GiaCayCanh] [float] NULL,
	[AnhCay] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[MaCayCanh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AnhCayCanh]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AnhCayCanh](
	[MaAnh] [int] IDENTITY(1,1) NOT NULL,
	[MaCayCanh] [int] NULL,
	[Anh] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[MaAnh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChiTietDonHang]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChiTietDonHang](
	[MaChiTietDonHang] [int] IDENTITY(1,1) NOT NULL,
	[MaDonHang] [int] NOT NULL,
	[MaCayCanh] [int] NOT NULL,
	[SoLuong] [int] NOT NULL,
	[TongTien] [float] NOT NULL,
	[GiaCayCanh] [float] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[MaChiTietDonHang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[MaDonHang] [int] IDENTITY(1,1) NOT NULL,
	[TenKhachHang] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[SoDienThoai] [nvarchar](10) NULL,
	[DiaChi] [nvarchar](100) NULL,
	[NgayBan] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[MaDonHang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NhaCungCap]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhaCungCap](
	[MaNhaCungCap] [int] IDENTITY(1,1) NOT NULL,
	[TenNhaCungCap] [nvarchar](100) NOT NULL,
	[DiaChi] [nvarchar](250) NULL,
	[SoDienThoai] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[MaNhaCungCap] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TheLoaiCayCanh]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TheLoaiCayCanh](
	[MaTheLoaiCayCanh] [int] IDENTITY(1,1) NOT NULL,
	[TheLoaiCayCanh] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[MaTheLoaiCayCanh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[user_id] [varchar](50) NOT NULL,
	[hoten] [nvarchar](150) NULL,
	[ngaysinh] [date] NULL,
	[diachi] [nvarchar](250) NULL,
	[gioitinh] [nvarchar](30) NULL,
	[email] [varchar](150) NULL,
	[taikhoan] [varchar](30) NULL,
	[matkhau] [varchar](60) NULL,
	[role] [varchar](30) NULL,
	[image_url] [varchar](300) NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CayCanh]  WITH CHECK ADD  CONSTRAINT [FK_TheLoaiCayCanh] FOREIGN KEY([MaTheLoaiCayCanh])
REFERENCES [dbo].[TheLoaiCayCanh] ([MaTheLoaiCayCanh])
GO
ALTER TABLE [dbo].[CayCanh] CHECK CONSTRAINT [FK_TheLoaiCayCanh]
GO
ALTER TABLE [dbo].[AnhCayCanh]  WITH CHECK ADD FOREIGN KEY([MaCayCanh])
REFERENCES [dbo].[CayCanh] ([MaCayCanh])
GO
ALTER TABLE [dbo].[ChiTietDonHang]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietDonHang_DonHang] FOREIGN KEY([MaDonHang])
REFERENCES [dbo].[DonHang] ([MaDonHang])
GO
ALTER TABLE [dbo].[ChiTietDonHang] CHECK CONSTRAINT [FK_ChiTietDonHang_DonHang]
GO
ALTER TABLE [dbo].[ChiTietDonHang]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietDonHang_MaCayCanh] FOREIGN KEY([MaCayCanh])
REFERENCES [dbo].[CayCanh] ([MaCayCanh])
GO
ALTER TABLE [dbo].[ChiTietDonHang] CHECK CONSTRAINT [FK_ChiTietDonHang_MaCayCanh]
GO
/****** Object:  StoredProcedure [dbo].[GetAllCayCanhs]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllCayCanhs]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT * FROM [dbo].[CayCanh];
END;
GO
/****** Object:  StoredProcedure [dbo].[GetBooksBySameGenreWithImages]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetCaysBySameGenreWithImages]
    @MaCayCanh INT
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @MaTheLoaiCayCanh INT;

    -- L?y mã th? lo?i sách c?a cu?n sách có mã sách du?c truy?n vào
    SELECT @MaTheLoaiCayCanh = CayCanh.MaTheLoaiCayCanh
    FROM CayCanh
    WHERE MaCayCanh = @MaCayCanh;

    -- Tr? v? các cu?n sách có cùng th? lo?i sách v?i cu?n sách có mã sách du?c truy?n vào,
    -- kèm theo thông tin ?nh sách
    SELECT CayCanh.*, AnhCayCanh.Anh
    FROM CayCanh
    INNER JOIN AnhCayCanh ON CayCanh.MaCayCanh = AnhCayCanh.MaCayCanh
    WHERE CayCanh.MaTheLoaiCayCanh = @MaTheLoaiCayCanh;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh_create]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CayCanh_create](
    @TenCayCanh NVARCHAR(100),
    @MaTheLoaiCayCanh INT,

    @SoLuong INT,
    @GhiChu NVARCHAR(MAX),
	@GiaCayCanh float
)
AS
BEGIN
    INSERT INTO CayCanh(TenCayCanh, MaTheLoaiCayCanh,  SoLuong, GhiChu, GiaCayCanh)
    VALUES (@TenCayCanh, @MaTheLoaiCayCanh,  @SoLuong, @GhiChu, @GiaCayCanh);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh_get_by_id]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CayCanh_get_by_id]
    @MaCayCanh int
AS
BEGIN
    SET NOCOUNT ON;

    SELECT [MaCayCanh], [TenCayCanh], [MaTheLoaiCayCanh], [SoLuong], [GhiChu], [GiaCayCanh]
    FROM [dbo].[CayCanh]
    WHERE [MaCayCanh] = @MaCayCanh;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh_get_by_id_admin]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CayCanh_get_by_id_admin](@MaCayCanh int)
AS
    BEGIN
		--DECLARE @MaChuyenMuc int;
		--set @MaChuyenMuc = (select MaChuyenMuc from SanPhams where MaSanPham = @MaSanPham);
        SELECT S.MaCayCanh,
        S.TenCayCanh,
        TLS.TheLoaiCayCanh as TenTheLoai,
 
        S.SoLuong,
        S.GhiChu,
		S.GiaCayCanh,
	
        (
            SELECT top 10 sp.*
            FROM CayCanh AS sp
            WHERE sp.MaTheLoaiCayCanh = s.MaTheLoaiCayCanh FOR JSON PATH
        ) AS list_json_CayCanhlienquan
        FROM CayCanh AS s     
		INNER JOIN 
			TheLoaiCayCanh TLS ON S.MaTheLoaiCayCanh = TLS.MaTheLoaiCayCanh
	
			
        WHERE  s.MaCayCanh = @MaCayCanh;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh_search]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CayCanh_search]
(
    @page_index  INT, 
    @page_size   INT,
    @ma_CayCanh INT,
    @ten_CayCanh NVARCHAR(100)
)
AS
BEGIN
    DECLARE @RecordCount BIGINT;

    IF (@page_size <> 0)
    BEGIN
        SET NOCOUNT ON;

        SELECT 
            (ROW_NUMBER() OVER(ORDER BY s.MaCayCanh DESC)) AS RowNumber, 
            s.MaCayCanh,
            s.TenCayCanh,
            tls.TheLoaiCayCanh AS TenTheLoai,

			s.SoLuong,
			s.GhiChu,
			s.GiaCayCanh
        INTO #Results1
        FROM CayCanh AS s
        LEFT JOIN TheLoaiCayCanh AS tls ON s.MaTheLoaiCayCanh = tls.MaTheLoaiCayCanh
    
        WHERE (@ma_CayCanh = -1 OR s.MaCayCanh = @ma_CayCanh)
              OR (@ten_CayCanh = '' OR s.TenCayCanh LIKE N'%' + @ten_CayCanh + '%');
                   
        SELECT @RecordCount = COUNT(*)
        FROM #Results1;

        SELECT 
            *,
            @RecordCount AS RecordCount
        FROM #Results1
        WHERE ROWNUMBER BETWEEN (@page_index - 1) * @page_size + 1 AND ((@page_index - 1) * @page_size + 1) + @page_size - 1
            OR @page_index = -1;

        DROP TABLE #Results1; 
    END
    ELSE
    BEGIN
        SET NOCOUNT ON;

        SELECT 
            (ROW_NUMBER() OVER(ORDER BY s.MaCayCanh DESC)) AS RowNumber, 
            s.MaCayCanh,
            s.TenCayCanh,
           
            tls.TheLoaiCayCanh AS TenTheLoai,
         
       
         
          
			s.SoLuong,
			s.GhiChu
        INTO #Results2
        FROM CayCanh AS s
        LEFT JOIN TheLoaiCayCanh AS tls ON s.MaTheLoaiCayCanh = tls.MaTheLoaiCayCanh
    
        WHERE (@ma_CayCanh = -1 OR s.MaCayCanh = @ma_CayCanh)
              OR (@ten_CayCanh = '' OR s.TenCayCanh LIKE N'%' + @ten_CayCanh + '%');
                   
        SELECT @RecordCount = COUNT(*)
        FROM #Results2;

        SELECT 
            *,
            @RecordCount AS RecordCount
        FROM #Results2;

        DROP TABLE #Results2; 
    END;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh_Theo_The_Loai_CayCanh]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CayCanh_Theo_The_Loai_CayCanh]
    @MaTheLoaiCayCanh INT
AS
BEGIN
    SELECT CayCanh.MaCayCanh, CayCanh.TenCayCanh, TheLoaiCayCanh.TheLoaiCayCanh AS TenTheLoai ,CayCanh.SoLuong, CayCanh.GhiChu, CayCanh.GiaCayCanh, AnhCayCanh.Anh
    FROM CayCanh
    INNER JOIN TheLoaiCayCanh ON CayCanh.MaTheLoaiCayCanh = TheLoaiCayCanh.MaTheLoaiCayCanh

	LEFT JOIN AnhCayCanh ON CayCanh.MaCayCanh = AnhCayCanh.MaAnh
    WHERE CayCanh.MaTheLoaiCayCanh = @MaTheLoaiCayCanh;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh_update]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_CayCanh_update]
(
    @Id int,
    @TenCayCanh nvarchar(100),
    @MaTheLoaiCayCanh int,
 
    @SoLuong int,
    @GhiChu nvarchar(MAX),
	@GiaCayCanh int
)
AS
BEGIN
    UPDATE CayCanh
    SET 
        TenCayCanh = @TenCayCanh,
        MaTheLoaiCayCanh = @MaTheLoaiCayCanh,
  
        SoLuong = @SoLuong,
        GhiChu = @GhiChu,
		GiaCayCanh = @GiaCayCanh
    WHERE MaCayCanh = @Id; 
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh1_search]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_CayCanh1_search]
(
    @page_index  INT, 
    @page_size   INT,
    @MaTheLoaiCayCanh INT
)
AS
BEGIN
    DECLARE @RecordCount BIGINT;

    IF (@page_size <> 0)
    BEGIN
        SET NOCOUNT ON;

        SELECT 
            (ROW_NUMBER() OVER(ORDER BY s.TenCayCanh ASC)) AS RowNumber, 
            s.MaCayCanh,
            s.TenCayCanh,
            tls.TheLoaiCayCanh AS TenTheLoai,
     
            s.SoLuong,
            s.GhiChu,
            s.GiaCayCanh
        INTO #Results1
        FROM CayCanh AS s
        LEFT JOIN TheLoaiCayCanh AS tls ON s.MaTheLoaiCayCanh = tls.MaTheLoaiCayCanh

        WHERE (@MaTheLoaiCayCanh = -1 OR s.MaTheLoaiCayCanh = @MaTheLoaiCayCanh);
                   
        SELECT @RecordCount = COUNT(*)
        FROM #Results1;

        SELECT 
            *,
            @RecordCount AS RecordCount
        FROM #Results1
        WHERE RowNumber BETWEEN (@page_index - 1) * @page_size + 1 AND ((@page_index - 1) * @page_size + 1) + @page_size - 1
            OR @page_index = -1;

        DROP TABLE #Results1; 
    END
    ELSE
    BEGIN
        SET NOCOUNT ON;

        SELECT 
            (ROW_NUMBER() OVER(ORDER BY s.TenCayCanh ASC)) AS RowNumber, 
            s.MaCayCanh,
            s.TenCayCanh,
            tls.TheLoaiCayCanh AS TenTheLoai,
     
            s.SoLuong,
            s.GhiChu,
            s.GiaCayCanh
        INTO #Results2
        FROM CayCanh AS s
        LEFT JOIN TheLoaiCayCanh AS tls ON s.MaTheLoaiCayCanh = tls.MaTheLoaiCayCanh

        WHERE (@MaTheLoaiCayCanh = -1 OR s.MaTheLoaiCayCanh = @MaTheLoaiCayCanh);
                   
        SELECT @RecordCount = COUNT(*)
        FROM #Results2;

        SELECT 
            *,
            @RecordCount AS RecordCount
        FROM #Results2;

        DROP TABLE #Results2; 
    END;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_CayCanh2_search]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CayCanh2_search]
(
    @page_index  INT, 
    @page_size   INT,
    @TenCayCanh NVARCHAR(100)
)
AS
BEGIN
    DECLARE @RecordCount BIGINT;

    IF (@page_size <> 0)
    BEGIN
        SET NOCOUNT ON;

        SELECT 
            (ROW_NUMBER() OVER(ORDER BY s.TenCayCanh ASC)) AS RowNumber, 
            s.MaCayCanh,
            s.TenCayCanh,
            tls.TheLoaiCayCanh AS TenTheLoai,

			s.SoLuong,
			s.GhiChu
        INTO #Results1
        FROM CayCanh AS s
        LEFT JOIN TheLoaiCayCanh AS tls ON s.MaTheLoaiCayCanh = tls.MaTheLoaiCayCanh

        WHERE @TenCayCanh = '' OR s.TenCayCanh LIKE N'%' + @TenCayCanh + '%';
                   
        SELECT @RecordCount = COUNT(*)
        FROM #Results1;

        SELECT 
            *,
            @RecordCount AS RecordCount
        FROM #Results1
        WHERE ROWNUMBER BETWEEN (@page_index - 1) * @page_size + 1 AND ((@page_index - 1) * @page_size + 1) + @page_size - 1
            OR @page_index = -1;

        DROP TABLE #Results1; 
    END
    ELSE
    BEGIN
        SET NOCOUNT ON;

        SELECT 
            (ROW_NUMBER() OVER(ORDER BY s.TenCayCanh ASC)) AS RowNumber, 
            s.MaCayCanh,
            s.TenCayCanh,
            tls.TheLoaiCayCanh AS TenTheLoai,
     
			s.SoLuong,
			s.GhiChu
        INTO #Results2
        FROM CayCanh AS s
        LEFT JOIN TheLoaiCayCanh AS tls ON s.MaTheLoaiCayCanh = tls.MaTheLoaiCayCanh
     
        WHERE @TenCayCanh = '' OR s.TenCayCanh LIKE N'%' + @TenCayCanh + '%';
                   
        SELECT @RecordCount = COUNT(*)
        FROM #Results2;

        SELECT 
            *,
            @RecordCount AS RecordCount
        FROM #Results2;

        DROP TABLE #Results2; 
    END;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_donhang_create]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_donhang_create]
(
    @TenKhachHang          NVARCHAR(100), 
    @Email                 NVARCHAR(100),
    @SoDienThoai           NVARCHAR(10),
    @DiaChi                NVARCHAR(100),
    @list_json_chitietdonhang NVARCHAR(MAX)
)
AS
BEGIN
    DECLARE @MaDonHang INT;
    DECLARE @NgayBan DATETIME;
    SET @NgayBan = GETDATE(); -- L?y ngày hi?n t?i
    
    INSERT INTO DonHang
            (TenKhachHang, 
             Email,
             SoDienThoai,
             DiaChi,
             NgayBan -- Thêm c?t NgayBan vào INSERT
            )
            VALUES
            (@TenKhachHang, 
             @Email,
             @SoDienThoai,
             @DiaChi,
             @NgayBan -- S? d?ng giá tr? ngày hi?n t?i
            );

    SET @MaDonHang = (SELECT SCOPE_IDENTITY());
    IF(@list_json_chitietdonhang IS NOT NULL)
        BEGIN
            INSERT INTO ChiTietDonHang
             (MaDonHang, 
              MaCayCanh,
              SoLuong,
              TongTien,
              GiaCayCanh
            )
            SELECT  @MaDonHang,
                    JSON_VALUE(p.value, '$.maCayCanh'),
                    JSON_VALUE(p.value, '$.soLuong'), 
                    JSON_VALUE(p.value, '$.tongTien'),
                    JSON_VALUE(p.value, '$.giaCayCanh')
            FROM OPENJSON(@list_json_chitietdonhang) AS p;
        END;
    SELECT '';
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[sp_login](@UserID INT, @Pass nvarchar(50))
AS
    BEGIN
      SELECT  *
      FROM NguoiDung
      where UserID= @UserID and Pass = @Pass;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_TheLoaiCayCanh_getAll]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_TheLoaiCayCanh_getAll]
   
AS
BEGIN
    SET NOCOUNT ON;

    SELECT *
    FROM TheLoaiCayCanh
   
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_create]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_user_create]
(@user_id              varchar(50), 
 @hoten          nvarchar(150) ,
 @ngaysinh         date  ,
 @diachi          nvarchar(250)  ,
 @gioitinh         nvarchar(30)  ,
 @email          varchar(150) ,
 @taikhoan         varchar(30) ,
 @matkhau         varchar(60)  ,
 @role          varchar(30) ,
 @image_url varchar(300) 
)
AS
    BEGIN
      INSERT INTO [user]
                (
				 	 [user_id]               , 
					 hoten           ,
					 ngaysinh          ,
					 diachi           ,
					 gioitinh           ,
					 email           ,
					 taikhoan         ,
					 matkhau           ,
					 role    ,
					 image_url
				)
                VALUES
                (
				 @user_id               , 
				 @hoten           ,
				 @ngaysinh          ,
				 @diachi           ,
				 @gioitinh           ,
				 @email           ,
				 @taikhoan         ,
				 @matkhau           ,
				 @role ,
				 @image_url
				);
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_delete]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[sp_user_delete]
(@user_id              varchar(50) 
)
AS
    BEGIN
		delete from [user] where user_id = @user_id;
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_get_by_id]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_user_get_by_id](@user_id VARCHAR(50))
AS
    BEGIN
        SELECT  [user_id]               , 
					 hoten           ,
					 ngaysinh          ,
					 diachi           ,
					 gioitinh           ,
					 email           ,
					 taikhoan         ,
					 matkhau           ,
					 role      ,
					 image_url  
        FROM [user]
      where  [user_id] = @user_id;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_get_by_username_password]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_user_get_by_username_password](@taikhoan varchar(30), @matkhau varchar(60))
AS
    BEGIN
        SELECT  [user_id]               , 
					 hoten           ,
					 ngaysinh          ,
					 diachi           ,
					 gioitinh           ,
					 email           ,
					 taikhoan         ,
					 role      ,
					 image_url  
        FROM [user]
      where  taikhoan = @taikhoan and matkhau = @matkhau ;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_search]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_user_search] (@page_index  INT, 
                                       @page_size   INT,
									   @hoten nvarchar(150),
									    @taikhoan varchar(30)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.hoten ASC)) AS RowNumber, 
                             u.user_id              , 
							 u.hoten           ,
							 u.ngaysinh          ,
							 u.diachi           ,
							 u.gioitinh           ,
							 u.email           ,
							 u.taikhoan         ,
							 u.matkhau           ,
							 u.role  ,
							 u.image_url  
                        INTO #Results1
                        FROM [user] AS u
						WHERE (u.taikhoan <> 'Admin') and ((@hoten = '') OR (u.hoten LIKE '%' + @hoten + '%')) and  ((@taikhoan = '') OR (u.taikhoan = @taikhoan));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                         SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.hoten ASC)) AS RowNumber, 
                             u.user_id              , 
							 u.hoten           ,
							 u.ngaysinh          ,
							 u.diachi           ,
							 u.gioitinh           ,
							 u.email           ,
							 u.taikhoan         ,
							 u.matkhau           ,
							 u.role     ,
							 u.image_url  
                        INTO #Results2
                        FROM [user] AS u
						WHERE (u.taikhoan <> 'Admin') and ((@hoten = '') OR (u.hoten LIKE '%' + @hoten + '%')) and  ((@taikhoan = '') OR (u.taikhoan = @taikhoan));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2;
                        DROP TABLE #Results2;
        END;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_update]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_user_update]
(@user_id              varchar(50), 
 @hoten          nvarchar(150) ,
 @ngaysinh         date  ,
 @diachi          nvarchar(250)  ,
 @gioitinh         nvarchar(30)  ,
 @email          varchar(150) ,
 @taikhoan         varchar(30) ,
 @matkhau         varchar(60)  ,
 @role          varchar(30),
 @image_url         varchar(300)
)
AS
    BEGIN
   update [user] set 
				hoten= @hoten    ,     
				taikhoan= @taikhoan  ,   
				--ngaysinh= @ngaysinh          ,
				--diachi= @diachi           ,
				--gioitinh= @gioitinh           ,
				--email= @email           ,
				--matkhau = @matkhau           ,
				--role= @role ,
				image_url = @image_url 
				where user_id = @user_id;
			 
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[XoaCayCanh]    Script Date: 4/27/2024 2:18:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[XoaCayCanh]
    @MaCayCanh INT
AS
BEGIN
    SET NOCOUNT ON;



    -- Xóa sách c?a nhà xu?t b?n
    DELETE FROM CayCanh WHERE MaCayCanh = @MaCayCanh;

END;
GO
USE [master]
GO
ALTER DATABASE [BanCayCanh] SET  READ_WRITE 
GO
